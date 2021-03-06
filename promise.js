
const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'},
  ];
  
  
  function getPosts() {
    setTimeout(() => {
      let output = '';
      posts.forEach((post) => {
        console.log(post.title);
      });
    }, 1000);
  }
  
  function createPost(post) {
    return new Promise((fn) => {
      setTimeout(() => {
        posts.push(post);
        fn();
      }, 2000);
    });
  }
  
  createPost({ title: 'Post Three', body: 'This is post three' })
    .then(getPosts);
  