# ConfigureTypeScript

## Add TypeScript to an ASP.NET Core project

A supporting repo for my [blog article](https://medium.com/@dneimke/add-typescript-to-an-asp-net-core-project-e8f7411e7b58) about how to set up an ASP.NET Core project to use TypeScript.

In the article, we first learn how to configure the solution to generate typescript files without modules.  Then, the 
article introduces modules and webpack as the module loader.

The branches in this repo represent the state of the codebase at each of those stages:

* Branch: [01-references](https://github.com/dneimke/ConfigureTypeScript/tree/01-references)
* Branch: [02-modules](https://github.com/dneimke/ConfigureTypeScript/tree/02-modules)

From here the plan is to introduce minification and to optimize the bundles to reduce repetition.