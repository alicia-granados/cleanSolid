import { PostService } from './05-dependencyB';
import { JsonDataBaseService } from './05-dependencyC';


// Main
(async () => {

    const provider = new JsonDataBaseService();
    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({ posts })


    

})();