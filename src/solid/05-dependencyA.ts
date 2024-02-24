import { PostService } from './05-dependencyB';
import { JsonDataBaseService, LocalDataBaseService, WebApiPostService } from './05-dependencyC';


// Main
(async () => {

    // const provider = new JsonDataBaseService();
    // const provider = new LocalDataBaseService();
    const provider = new WebApiPostService();

    const postService = new PostService( provider );

    const posts = await postService.getPosts();

    console.log({ posts });


})();