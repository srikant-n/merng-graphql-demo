import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <main>
        <h1>Book List</h1>
        <BookList />
        <AddBook />
      </main>
    </ApolloProvider>
  );
}

export default App;
