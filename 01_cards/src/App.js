import React from "react";
import ApprovalCard from "./ApprovalCard";
import Comment from "./Comment";
import "./style/App.css";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <Comment name="Sam" date="Today at 6pm" text="Nice blog post" />
      </ApprovalCard>
      <ApprovalCard>
        <Comment name="John" date="Today at 7pm" text="Super post" />
      </ApprovalCard>
      <ApprovalCard>
        <Comment name="Sara" date="Today at 8pm" text="blah" />
      </ApprovalCard>
    </div>
  );
};

export default App;
