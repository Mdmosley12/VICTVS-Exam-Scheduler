import { SingleCandidatePage } from "@/components/singleCandidate/singleCandidate";

const SingleCandidate = ({ examsByCandidate, pageName }) => {
  return (
    <>
      <SingleCandidatePage examsByCandidate={examsByCandidate} />
    </>
  );
};

export default SingleCandidate;

export async function getStaticPaths() {
  const { data } = await import("/data/TechTestJson.json");
  const allPaths = data.map((exam) => {
    return {
      params: {
        candidateName: exam.CandidateName.toString(),
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const paramsCandidateName = context?.params.candidateName;
  const { data } = await import("/data/TechTestJson.json");
  const examsByCandidate = data.filter((exam) => {
    return exam.CandidateName === paramsCandidateName ? exam : null;
  });

  return {
    props: {
      examsByCandidate: examsByCandidate,
      pageName: paramsCandidateName,
    },
  };
}
