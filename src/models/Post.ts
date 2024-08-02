import Realm, {ObjectSchema} from "realm";

export default class Post extends Realm.Object<Post> {
    _id!: Realm.BSON.ObjectId;
    userId!: number;
    postId!: number;
    title!: string;
    body!: string

    static schema: ObjectSchema = {
      name: 'Post',
      primaryKey: '_id',
      properties: {
        _id: 'objectId',
        userId: 'int',
        postId: 'int',
        title: 'string',
        body: 'string',
      },
    };
  }