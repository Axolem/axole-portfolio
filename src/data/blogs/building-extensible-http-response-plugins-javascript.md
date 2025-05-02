---
slug: "building-extensible-http-response-plugins-javascript"
title: "Building an Extensible HTTP Response Plugin System with TypeScript"
date: "2025-05-02"
excerpt: "Learn how to create a flexible and maintainable plugin system for HTTP responses using Bun and TypeScript, perfect for adding middleware-like functionality to your web applications."
tags: ["bun", "typescript", "plugins", "architecture", "web-development"]
readingTime: 8
author:
  name: "Axole Maranjana"
  image: "/axole-maranjana.jpg"
  url: "/"
ogImage: 
keywords: ["bun", "typescript", "plugins", "middleware", "http", "web development", "architecture", "design patterns"]
---

# Building an Extensible HTTP Response Plugin System with Bun

In modern web development, having a flexible and maintainable way to modify HTTP responses is crucial. In this blog post, we'll explore how to build a plugin system that allows you to easily extend and modify HTTP responses in a Bun application using TypeScript.

## Understanding the Plugin Architecture

Our plugin system consists of four main components:

1. Plugin Interface
2. Plugin Implementation
3. Plugin Loader
4. Plugin Executor

Let's dive into each component and understand how they work together.

## Folder Structure

```markdown
📦root
├── 📂plugins
│   ├── 📄add-server-info.ts
│   └── 📄add-timestamp.ts
├── 📂types
│   ├── 📄response.ts
├── 📂utils
│   ├── 📄plugin-loader.ts
│   └── 📄response-plugin-execute.ts
├── 📄index.ts
```

## The Plugin Interface

First, we define a `ResponsePlugin` interface that all plugins must implement:

```typescript
// types/response.ts
interface ResponsePlugin {
  name: string;
  onLoad(): void;
  execute<T>(data: T): Promise<T>;
}
```

This interface ensures that each plugin has:
- A unique name for identification
- An `onLoad` method for initialization
- An `execute` method that processes the response data

## Creating Plugins

Let's look at two example plugins that demonstrate different use cases:

### 1. Server Info Plugin

```typescript
// plugins/add-server-info.ts
const AddServerInfo: ResponsePlugin = {
  name: "add-server-info-plugin",
  onLoad() {
    console.log(`${this.name} has been loaded`);
  },
  async execute(data) {
    if (typeof data === "object") {
      (data as any).serverInfo = {
        name: "Axole's sever",
        version: "v1.0.0",
        os: "Windows 11",
      };
    }
    return data;
  },
};
```

This plugin adds server information to the response object, useful for debugging or client-side feature detection.

### 2. Timestamp Plugin

```typescript
// plugins/add-timestamp.ts
const AddTimestampPlugin: ResponsePlugin = {
  name: "add-timestamp-plugin",
  onLoad() {
    console.log(`${this.name} has been loaded`);
  },
  async execute<T>(data: T): Promise<T> {
    (data as any).timestamp = new Date().toISOString();
    return data;
  },
};
```

This plugin adds a timestamp to each response, which can be useful for caching or tracking purposes.

## The Plugin Loader

The plugin loader is responsible for dynamically loading plugins from the filesystem:

```typescript
// utils/plugin-loader.ts
export const loadPlugins = async (): Promise<ResponsePlugin[]> => {
  const plugins: ResponsePlugin[] = [];
  const pluginsFolder = path.join(process.cwd(), "plugins");
  const pluginsFiles_ = await readdir(pluginsFolder);

  const validFiles = pluginsFiles_.filter(
    (f) => f.endsWith(".ts") || f.endsWith(".js")
  );

  for (const file of validFiles) {
    const plugin = await validatePlugin(path.join(pluginsFolder, file));
    plugins.push(plugin);
  }

  return plugins;
};
```

Validator
```typescript
// utils/plugin-loader.ts
const validatePlugin = async (pluginPath: string) => {
  const pluginModule = await import(pluginPath);
  const plugin: ResponsePlugin = pluginModule.default;
  try {
    if (!("name" in plugin)) throw new Error("Plugin name not defined.");
    if (!("onLoad" in plugin)) throw new Error("Plugin onLoad not defined.");
    if (!("execute" in plugin)) throw new Error("Plugin execute not defined.");

    plugin.onLoad();

    return plugin;
  } catch (e) {
    console.error(
      `Error loading plugin ${plugin?.name} on file: ${pluginPath}: `,
      (e as Error).message
    );
    process.exit(1);
  }
};
```

The loader:
1. Reads the plugins directory
2. Filters for TypeScript and JavaScript files
3. Validates each plugin
4. Returns an array of loaded plugins

## Plugin Execution

The execution of plugins is handled by a simple but powerful executor:

```typescript
// utils/response-plugin-execute.ts
const executeResponsePlugins = async <T>(data: T): Promise<T> => {
  for (const plugin of plugins) {
    data = await plugin.execute(data);
  }
  return data;
};
```

This executor:
- Takes any type of data as input
- Runs each plugin's execute method sequentially
- Returns the modified data

## Usage with Bun

```typescript
// index.ts
import { executeResponsePlugins } from "./utils/response-plugin-execute";

Bun.serve({
  routes: {
    "/api/greet/:name/:surname": {
      GET: async (req) => {
        // Obviously would validate these
        const data = {
          name: req.params.name,
          surname: req.params.surname,
        };

        const transformedData = await executeResponsePlugins(data);
        return Response.json(transformedData);
      },
    },
  },
});
```

## Benefits of This Architecture

1. **Modularity**: Each plugin is a self-contained unit that can be easily added or removed
2. **Type Safety**: TypeScript ensures plugins implement the correct interface
3. **Flexibility**: Plugins can modify any type of response data
4. **Dynamic Loading**: Plugins are loaded automatically from the plugins directory
5. **Easy to Extend**: Adding new plugins is as simple as creating a new file in the plugins directory

## Best Practices

When implementing this plugin system, consider these best practices:

1. **Plugin Naming**: Use descriptive names that indicate the plugin's purpose
2. **Error Handling**: Always validate plugin data and handle errors gracefully
3. **Plugin Order**: Consider the order of plugin execution, as it can affect the final result
4. **Type Safety**: Use TypeScript generics to ensure type safety throughout the plugin chain
5. **Documentation**: Document each plugin's purpose and any side effects it may have

## Conclusion

This plugin system provides a solid foundation for building extensible HTTP applications in Bun. It's flexible enough to handle various use cases while maintaining code organization and type safety.

You can extend this system further by:
- Adding plugin configuration options
- Implementing plugin dependencies
- Adding plugin lifecycle hooks
- Creating plugin groups or categories

The complete code for this plugin system is available in the [repository](https://github.com/Axolem/http-plugin), and you can use it as a starting point for your own projects.

## Additional Resources

- [Bun Documentation](https://bun.sh)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Design Patterns in TypeScript](https://refactoring.guru/design-patterns/typescript)

Happy coding! 🚀 