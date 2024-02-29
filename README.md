# ReactSse

<a alt="SapientSoftwareInternational logo" href="https://www.sapientsoftwareinternational.com/" target="_blank" rel="noreferrer"><img src="https://avatars.githubusercontent.com/u/160737524?s=200&v=4" width="45"></a>

✨ [Sapient Software International](https://www.sapientsoftwareinternational.com/) ✨

## Server-Sent Events

In the realm of web development, real-time updates and dynamic content delivery are paramount for creating engaging user experiences. Among the array of technologies available, Server-Sent Events (SSE) stand out as a powerful tool for establishing a persistent connection between a client (such as a React application) and a server. SSE allows servers to send updates or notifications to clients automatically once an initial connection has been established.

## Start the application

Run `npx nx serve react-sse` to start the development server. Happy coding!

## Build for production

Run `npx nx build react-sse` to build the application. The build artifacts are stored in the output directory (e.g. `dist/` or `build/`), ready to be deployed.

## Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Explore the project graph

Run `npx nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.

- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)

## Connect with us!

- [Join the community](https://nx.dev/community)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
- [Follow us on Twitter](https://twitter.com/nxdevtools)
