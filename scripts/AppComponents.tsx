import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";


export const Home = (props: RouteComponentProps<any>) => {
    return (<div>
        <div>Zu Hause!</div>
        <div>
            <Link to="/posts">Gehe zu posts</Link>
        </div>
    </div>);
};


export const Posts = (props: RouteComponentProps<any>) => {
    return <div><PostList /></div>;
};

interface IPostListStatus {
    loadingPosts?: boolean;
}
interface IPostListProps {
    loadingPosts?: boolean;
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
            Test
            {this.state.loadingPosts ?
                (<div>Lade Posts...</div>) :
                (<div>Posts</div>)}
            <div>
                <Link to="/">Gehe nach hause</Link>
            </div>
        </span>);
    }
}

