// App.jsx
import './App.css';
import { useQuery, gql } from '@apollo/client';

const query = gql`
  query GetTodos {
    todos {
      id
      title
      completed
      user {
        name
        email
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(query);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error :(</p>;

  return (
    <div className="container">
      <h1 className="title">Todo List by Swapnendu using GraphQL</h1>
      <div className="grid">
        {data.todos.map((todo) => (
          <div key={todo.id} className="card">
            <h2 className="card-title">{todo.title}</h2>
            <p className={`status ${todo.completed ? 'completed' : 'not-completed'}`}>
              {todo.completed ? 'Completed' : 'Not Completed'}
            </p>
            <div className="user-info">
              <h3 className="user-name">{todo.user.name}</h3>
              <p className="user-email">{todo.user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
