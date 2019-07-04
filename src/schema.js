import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import path from "path";

// 모든 타입(.graphql)파일과 리졸버(.js) 파일을 가져온다
// api 폴더 밑에 그 외 다른 파일은 두면 안된다
const allTypes = fileLoader(path.join(__dirname, "/api/**/*.graphql"));
const allResolvers = fileLoader(path.join(__dirname, "/api/**/*.js"));

const schema = makeExecutableSchema({
  typeDefs: mergeTypes(allTypes),
  resolvers: mergeResolvers(allResolvers)
});

export default schema;
