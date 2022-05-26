import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function Home() {
  const { user } = useUser()

  return (
    <div>
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>

      <h1>Hello World</h1>
      <a href="/api/auth/logout">Logout</a>
    </div>
  )
}

export const getServerSideProps = withPageAuthRequired()