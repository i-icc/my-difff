import * as React from 'react';
import DiffViewer from 'react-diff-viewer';
import { diffWordsWithSpace } from 'diff';

type Props = {
  from: string;
  to: string;
};

const Diff: React.FC<Props> = ({ from, to }) => {
  React.useMemo(() => {
    return diffWordsWithSpace(from, to);
  }, [from, to]);

  return (
    <div className="diff">
      <DiffViewer oldValue={from} newValue={to} splitView={true} />
    </div>
  );
};

export default Diff;
