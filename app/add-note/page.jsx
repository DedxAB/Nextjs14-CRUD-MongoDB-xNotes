import AddTopic from "@/components/AddTopic/AddTopic";

export const metadata = {
  title: "Add Note | DedxNotes",
  description: "Created by DedxAB | A Note sharing WebApp.",
};

const AddTopicPage = () => {
  return (
    <div className="min-h-[85vh]">
      <AddTopic />
    </div>
  );
};

export default AddTopicPage;
