import * as React from "react";

export const Posts = (props: any) => {
    return <div><PostList /></div>;
};

interface IPostListStatus {
    loadingPosts?: boolean;
    cnt?: number;
}

interface IPostListProps {
    locally?: boolean;
}

export class PostList extends React.Component<IPostListProps, IPostListStatus> {
    constructor(props) {
        super(props);
        this.state = {};
    }

    public componentDidMount() {
        this.setState({ loadingPosts: true });
        setTimeout(() => this.setState({ loadingPosts: false }), 2000);
    }

    public render() {
        return (<span>
            Liste :&nbsp;
                <a href="javascript:void(0);"
                    onClick={() => this.setState({ cnt: (this.state.cnt ? this.state.cnt + 1 : 1) })}>
                    {(this.state.cnt ? this.state.cnt : 0)}
                </a>
        </span>);
    }
}
