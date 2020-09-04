import React from "react";
import '../asset/thumbnail.scss';
import classNames from 'classnames';

const BoardThumbnail = ({ title, CreateBoard=false }) => {

  return (
    <div className={classNames(CreateBoard? 'Board__thumbnail__create':'Board__thumbnail__normal')}>
      <h3>{title}</h3>
    </div>
  );
};

export default BoardThumbnail;
