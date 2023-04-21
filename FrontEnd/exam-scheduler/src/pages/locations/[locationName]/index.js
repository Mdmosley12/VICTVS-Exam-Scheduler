import { SingleLocationPage } from "@/components/singleLocation/singleLocation";

const SingleLocation = ({ examsByLocation, pageName }) => {
  return (
    <>
      <SingleLocationPage examsByLocation={examsByLocation} />
    </>
  );
};

export default SingleLocation;

export async function getStaticPaths() {
  const { data } = await import("/data/TechTestJson.json");
  const allPaths = data.map((exam) => {
    return {
      params: {
        locationName: exam.LocationName.toString(),
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const paramsLocationName = context?.params.locationName;
  const { data } = await import("/data/TechTestJson.json");
  const examsByLocation = data.filter((exam) => {
    return exam.LocationName === paramsLocationName ? exam : null;
  });
  return {
    props: {
      examsByLocation: examsByLocation,
      pageName: paramsLocationName,
    },
  };
}
