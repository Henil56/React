import conf from '../conf/conf.js';
import { Client, Account, ID ,Databases,Storage,Query,TablesDB} from "appwrite";


export class Service {
    client = new Client();
    tablesDB;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectID);

        this.tablesDB = new TablesDB(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.tablesDB.createRow({
                databaseId: conf.appwriteDatabaseID,
                tableId: conf.appwriteCollectionID,
                rowId: slug || ID.unique(),
                data: {
                    title,
                    slug,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            });
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
    try {
        return await this.tablesDB.updateRow({
            databaseId: conf.appwriteDatabaseID,
            tableId: conf.appwriteCollectionID,
            rowId: slug,
            data: {
                title,
                content,
                featuredImage,
                status,
            }
        });
    } catch (error) {
        throw error;
    }
    }

    async deletePost(slug) {
    try {
        await this.tablesDB.deleteRow({
            databaseId: conf.appwriteDatabaseID,
            tableId: conf.appwriteCollectionID,
            rowId: slug,
        });
        return true;
    } catch (error) {
        throw error;
    }
    }
    async getPost(slug){
        try {
            return await this.tablesDB.getRow({
                databaseId: conf.appwriteDatabaseID,
                tableId: conf.appwriteCollectionID,
                rowId: slug,
        });
        } catch (error) {
            throw error
        }
    }
    async getPost(queries=[Query.equal("status","active")]){
        try {
            return await this.tablesDB.listRows({
                databaseId: conf.appwriteDatabaseID,
                tableId: conf.appwriteCollectionID,
                queries,
        });
        } catch (error) {
            throw error
        }
    }

    //file upload servive

    async uploadFile(file){
        try {
            return await this.bucket.createFile({             
                bucketId: conf.appwriteBucketID,
                fileId: ID.unique(),
                file: document.getElementById('uploader').files[0]
        })   
        } catch (error) {
            throw error;
        }
    }
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile({
                bucketId: conf.appwriteBucketID,
                fileId: fileId
            })
            return true
        } catch (error) {
            throw error;
        }
    }
    getFileFile(fileId){
        return this.bucket.getFilePreview({
            bucketId: conf.appwriteBucketID,
            fileId: fileId,
        });
    }
    
}

const service = new Service();
export default service;
