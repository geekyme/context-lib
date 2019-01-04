### Context Library

This is a minimal example library to show how to use context in a library.

### Usage Instructions

Install and link

```
git clone git@github.axa.com:shawn-limqc/context-lib.git
cd /path/to/context-lib
npm install
npm link
```

Add library in app

```
cd /path/to/app
npm link context-lib
```

Add code for **App.js**

```
import React, { Component } from "react";
import ContextLib from "context-lib";
import Another from "./Another";
class App extends Component {
  render() {
    return (
      <ContextLib.Provider>
        <Another />
      </ContextLib.Provider>
    );
  }
}

export default App;
```

Add code for **Another.js**

```
import React, { Component } from "react";
import ContextLib from "context-lib";

class Another extends Component {
  render() {
    return <ContextLib.Consumer />;
  }
}

export default Another;
```
