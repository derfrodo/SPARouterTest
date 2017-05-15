import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";

export const Home = (props: RouteComponentProps<any>) => {
    return (<div>
        <div>Zu Hause!</div>
        <div>
            <Link to={{ pathname: "/posts", state: { locally: true } }} >Gehe zu posts</Link>
        </div>
    </div>);
};

export const Posts = (props: RouteComponentProps<any>) => {
    return <div><PostList locally={(props.location.state && props.location.state.locally) ? true : false} /></div>;
};

interface IPostListStatus {
    loadingPosts?: boolean;
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
            {this.props.locally ? <div>locally</div> : <span></span>}
            {this.state.loadingPosts ?
                (<div>Lade Posts...</div>) :
                (<div>Posts</div>)}
            <div>
                <Link to="/">Gehe nach hause</Link>
            </div>
        </span>);
    }
}
