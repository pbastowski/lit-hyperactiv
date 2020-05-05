import { computed, observe, router } from '/src/libs.js'

export function createRoutes(routes, _outlet) {
    const outlet = _outlet || observe({ view: () => {} })

    // if (routes.length === 5) debugger

    const _routes = routes.map(([path, component = () => {}, exit]) => {
        const s = component.toString()

        let argt =
            s.includes('class') || s.includes('function')
                ? 'class'
                : s.includes('import')
                ? 'promise'
                : s.includes('=>')
                ? 'function'
                : 'component'

        console.log('COMPONENT:', argt, '\n', component.toString())

        let enter =
            argt === 'component'
                ? component
                : argt === 'function'
                ? params => {
                      //   console.log('FUNCTION:', 'this' in component)
                      console.log('FUNCTION:', component.toString())
                      outlet.view = props => component(props, params)
                      // TODO: this fails because the render function includes a "new ..."" in it
                  }
                : argt === 'class'
                ? params => (outlet.view = props => new component()(props, params))
                : /* ... or it's a promise */
                  params => {
                      //   console.log('PROMISE 1:', params)
                      component().then(m => {
                          //   console.log('PROMISE 2:', m.default.toString())

                          outlet.view = props => m.default()(props, params)
                      })
                  }
        //   component().then(m => {
        //       const isClass = m.default.toString().startsWith('class ')
        //       outlet.view = props =>
        //           isClass
        //               ? new m.default()(props, params)
        //               : m.default(props, params)
        //   })

        // console.log('ENTER:', enter)
        return {
            path,
            enter,
            exit: route => {
                console.log('EXIT', route)
                // outlet.view = () => {}
                // exit && exit(route)
            },
            argt
        }
    })

    console.log('ROUTES:', _routes)
    router.add(_routes).listen()

    return outlet
}

// console.log('ROUTES:', routes)
