import './index.scss';
import React, {Suspense} from "react";
import {AppCon} from "~/components/AppCon";
import Button from 'tasks/App';

const Index = () => {
  return (
    <div className="container-box">
      111
      <AppCon />
      <Suspense fallback={<div>Loading...</div>}>
        <Button />
      </Suspense>
    </div>
  );
}

export default Index;
