import Blog from "./Blog";

const Post = () => {
    // let i = 0;
    const x = Blog.map(x =>
        <div className='box' key={x._id}>
            {/* <p>id: {x._id}</p> */}
            <img src={x.image} />
            <p >{x.date} / {x.comments} COMMENTS</p>
            <h3 className='txt'>{x.title}</h3>
            <p className='txt'>{x.content}</p>
            <p><a className="App-lin" href={x.link}>Nuoroda</a> </p>
            {/* <p>category: {x.category}</p> */}
        </div>
    );

    console.log(x);
    return <main>{x}</main>;
}

export default Post;

