import { Link } from "@components/Link";
import { useRouter } from "@hooks/useRouter";

const About = () => {
  const router = useRouter();

  return (
    <div>
      <h1>About</h1>
      <Link to="/">go main (Link)</Link>
      <button onClick={() => router.push("/")}>go main (router.push)</button>
    </div>
  );
};

export default About;
