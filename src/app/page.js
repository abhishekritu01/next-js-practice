import FileUpload from "./component/FileUpload";
import DocUpload from "./component/DocUpload";
import Form from "./component/Form";


const Page = () => {
  return (
    <div className="container mx-auto mt-10 flex flex-col items-center bg-gray-100 p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-8">Upload Your File</h1>
      {/* <FileUpload /> */}
      {/* <DocUpload /> */}
      <Form />

    </div>
  );
}

export default Page;
