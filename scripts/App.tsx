import * as React from "react";

export default class App extends React.Component<{}, { cnt: number }>{

    constructor(props) {
        super(props);
        this.state = { cnt: 0 }
        this.doSomething = this.doSomething.bind(this)

        setTimeout(this.doSomething, 1000);
    }

    public render() {
        return (
            <div>
                <p>H W 2</p>
                <p>{this.state.cnt}</p>
            </div>)
    }

    private doSomething() {
        this.setState({ cnt: this.state.cnt + 1 })
        setTimeout(this.doSomething, 1000);
    }

}
