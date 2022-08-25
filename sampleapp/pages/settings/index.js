import Link from "next/link";
export const getStaticProps = async () => {
  const request = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await request.json();

  return {
    props: { users: data },
  };
};

const Settings = ({ users }) => {
  return (
    <div>
      <h1>Settings Page</h1>
      {users.map((user) => (
        <Link href={"/settings/" + user.id} key={user.id}>
          <a>
            <h3>{user.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Settings;
