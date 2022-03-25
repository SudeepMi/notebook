import * as fs from 'fs';
import { createPost } from 'helpers/api/posts';
import { apiHandler } from 'helpers/api/api-handler';


export default apiHandler({
    post: create
});

function create(req, res) {
    // split out password from user details 
    const article = createPost(req.body);
    if(article) {
    return res.status(200).json({article});
    }
    return res.status(400).json({error: 'Article not created', article});
}
