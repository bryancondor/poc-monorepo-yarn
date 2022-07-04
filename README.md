# Monorepo with Yarn

Whatever repo/project that we'll put into `package` folder automatically it's considere like a `workspace yarn`, because in the package.json main we put this rule.

### Install all dependecies

```bash
# option 1
yarn

# option 2
yarn install
```

### Install a local package

it's important leave the `@` character to final

```bash
yarn add your-local-package@
```

### Install a remote package

```bash
yarn add a-remote-package
```

## Workspace

### Run commands from an specific Workspace (application/repo)

```bash
# option 1
cd your-workspace-application
yarn <command>

# option 2
yarn workspace your-workspace-application <command>
```

Example:
```bash
yarn workspace @bcd-monorepo/app3 test
```

---

Created by @BryanCondor
