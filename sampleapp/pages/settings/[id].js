// export const getStaticPaths = async () => {
//   const request = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await request.json();

//   const paths = data.map((user) => {
//     return {
//       params: { id: user.id.toString() },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getStaticPaths = async () => {
  const request = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await request.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const request = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + id
  );
  const data = await request.json();

  return {
    props: { user: data },
  };
};

// export const getStaticProps = async (context) => {
//   const id = context.params.id;
//   const request = await fetch(
//     "https://jsonplaceholder.typicode.com/users/" + id
//   );
//   const data = await request.json();

//   return {
//     props: { user: data },
//   };
// };

const userDetails = ({ user }) => {
  return (
    <div>
      <h1>User Settings</h1>
      <p>{user.name}</p>
      <p>{user.name}</p>
      <p>{user.name}</p>
      <p>{user.name}</p>
    </div>
  );
};

export default userDetails;
