// Put all the imports into one lib file to make it
// easier to access in other source files.

// We want to export the individual methods of hyperactiv, not their container object
// so we first import hyperactiv and then destructure and export the methods we want.
import hyperactiv from 'hyperactiv/src'
export const { observe, computed, dispose } = hyperactiv

// lit-html has lots of useful methods, of which we only want a subset.
// The most useful to us are listed below.
export { render, html, EventPart, directive, nothing } from 'lit-html'
// export { render, EventPart, directive, nothing } from 'lit-html'
// export { LitElement, html } from 'lit-element?module'
export { repeat } from 'lit-html/directives/repeat'
export { styleMap } from 'lit-html/directives/style-map'
export { classMap } from 'lit-html/directives/class-map'
export { unsafeHTML } from 'lit-html/directives/unsafe-html'

// lit-element
// export { LitElement } from 'lit-element'

// easyrouter is a small client side hash #router
import r from 'easyrouter'
export const router = r

// A small utility function that pretty-prints any objects given to it.
export const json = (...args) => args.map((arg) => JSON.stringify(arg, null, 4))

// export { createRoutes } from './cr.js'
