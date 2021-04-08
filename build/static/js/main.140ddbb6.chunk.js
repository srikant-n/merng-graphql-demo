(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{62:function(e,n,t){},70:function(e,n,t){"use strict";t.r(n);var c,r,o,a,i=t(4),d=t.n(i),j=t(52),s=t.n(j),l=(t(62),t(12)),b=t(30),u=t(57),h=t(21),O=t(28),x=Object(l.gql)(c||(c=Object(O.a)(["\n  {\n    books {\n      name\n      genre\n      id\n    }\n  }\n"]))),g=Object(l.gql)(r||(r=Object(O.a)(["\n  {\n    authors {\n      name\n      id\n    }\n  }\n"]))),m=Object(l.gql)(o||(o=Object(O.a)(["\n  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {\n    addBook(name: $name, genre: $genre, authordId: $authorId) {\n      name\n      genre\n      id\n    }\n  }\n"]))),v=Object(l.gql)(a||(a=Object(O.a)(["\n  query GetBook($id: ID) {\n    book(id: $id) {\n      id\n      name\n      genre\n      author {\n        id\n        name\n        age\n        books {\n          name\n          id\n        }\n      }\n    }\n  }\n"]))),f=t(3);var p=function(){var e=Object(l.useQuery)(g),n=e.loading,t=e.error,c=e.data,r=Object(l.useMutation)(m,{update:function(e,n){var t=n.data;e.modify({fields:{books:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat(Object(u.a)(e),[t])}}})}}),o=Object(h.a)(r,1)[0],a=Object(i.useState)(""),d=Object(h.a)(a,2),j=d[0],s=d[1],b=Object(i.useState)(""),O=Object(h.a)(b,2),x=O[0],v=O[1],p=Object(i.useState)(),k=Object(h.a)(p,2),I=k[0],y=k[1];return Object(f.jsxs)("form",{id:"add-book",onSubmit:function(e){e.preventDefault(),o({variables:{name:j,genre:x,authorId:I}})},children:[Object(f.jsxs)("div",{className:"field",children:[Object(f.jsx)("label",{children:"Book name:"}),Object(f.jsx)("input",{type:"text",onChange:function(e){return s(e.target.value)}})]}),Object(f.jsxs)("div",{className:"field",children:[Object(f.jsx)("label",{children:"Genre:"}),Object(f.jsx)("input",{type:"text",onChange:function(e){return v(e.target.value)}})]}),Object(f.jsxs)("div",{className:"field",children:[Object(f.jsx)("label",{children:"Author:"}),Object(f.jsxs)("select",{onChange:function(e){return y(e.target.value)},children:[Object(f.jsx)("option",{children:"Select author"}),n?Object(f.jsx)("option",{disabled:!0,children:"Loading authors..."}):t?Object(f.jsx)("option",{disable:!0,children:"Failed to get authors"}):c.authors.map((function(e){var n=e.id,t=e.name;return Object(f.jsx)("option",{value:n,children:t},n)}))]})]}),Object(f.jsx)("button",{children:"Add"})]})};var k=function(e){var n=e.bookId,t=Object(l.useQuery)(v,{variables:{id:n}}).data;return Object(f.jsx)("div",{className:"book-details",children:function(){var e=t?t.book:null;return e?Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:e.name}),Object(f.jsx)("p",{children:e.genre}),Object(f.jsx)("p",{children:e.author.name}),Object(f.jsx)("p",{children:"All books by this author:"}),Object(f.jsx)("ul",{className:"other-books",children:e.author.books.map((function(e){return Object(f.jsx)("li",{children:e.name},e.id)}))})]}):Object(f.jsx)("div",{children:"No book selected..."})}()})};var I=function(){var e=Object(l.useQuery)(x),n=e.loading,t=e.error,c=e.data,r=Object(i.useState)(null),o=Object(h.a)(r,2),a=o[0],d=o[1];return n?Object(f.jsx)("p",{children:"Loading books..."}):t?Object(f.jsxs)("p",{children:["`Error :(\\n$",t,"`"]}):Object(f.jsxs)("div",{id:"books",children:[Object(f.jsx)("ul",{id:"book-list",children:c.books.map((function(e){var n=e.name,t=e.id;return Object(f.jsx)("li",{onClick:function(){return d(t)},children:n},t)}))}),Object(f.jsx)(k,{bookId:a})]})},y=new l.ApolloClient({uri:"/graphql",cache:new l.InMemoryCache});var S=function(){return Object(f.jsx)(b.ApolloProvider,{client:y,children:Object(f.jsxs)("main",{children:[Object(f.jsx)("h1",{children:"Book List"}),Object(f.jsx)(I,{}),Object(f.jsx)(p,{})]})})},C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,71)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),c(e),r(e),o(e),a(e)}))};s.a.render(Object(f.jsx)(d.a.StrictMode,{children:Object(f.jsx)(S,{})}),document.getElementById("root")),C()}},[[70,1,2]]]);
//# sourceMappingURL=main.140ddbb6.chunk.js.map