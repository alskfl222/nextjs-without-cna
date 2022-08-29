import { withWrapper, Base } from '../../components/common/Wrapper';

const AboutData = withWrapper(Base);

export default function About() {
  return (
    <div>
      About
      <AboutData />
    </div>
  );
}
