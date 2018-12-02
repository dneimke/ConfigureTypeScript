# ConfigureTypeScript

## Add TypeScript to an ASP.NET Core project

A supporting repo for my [blog article](https://medium.com/@dneimke/add-typescript-to-an-asp-net-core-project-e8f7411e7b58) about how to set up an ASP.NET Core project to use TypeScript.

In the article, we first learn how to configure the solution to generate typescript files without modules.  Then, the 
article introduces modules and webpack as the module loader.

The branches in this repo represent the state of the codebase at each of those stages:

* [Branch 01-references](https://github.com/dneimke/ConfigureTypeScript/tree/01-references) - Uses TypeScript to compile .ts to JavaScript.
* [Branch 02-modules](https://github.com/dneimke/ConfigureTypeScript/tree/02-modules) - Convert to using modules and webpack to create a bundle per page.
* [Branch 03-minification](https://github.com/dneimke/ConfigureTypeScript/tree/03-minification) - Combines and minifies the bundles.  Uses a custom TagHelper to inject page load scripts.

## Current State 

Currently webpack is building bundles for common and one for each page.  The common bundle is included in the layout template
as you can see from the following image.

![Layout template](https://github.com/dneimke/ConfigureTypeScript/raw/master/src/assets/LayoutPage.jpg "Common bundle included in the layout template")

Each view is then responsible for loading its relevant page bundle and calling into a TagHelper to 
bootstrap the page.

![Pages](https://github.com/dneimke/ConfigureTypeScript/raw/master/src/assets/ContentPage.jpg "Page bundle and bootstrapping code")

There is the potential to lean on webpack a bit more in terms of things like using the Html plugin to inject code into pages.
