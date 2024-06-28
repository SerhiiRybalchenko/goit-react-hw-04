/* eslint-disable react/prop-types */
import { DNA } from "react-loader-spinner";
import css from './Loader.module.css'

export default function Loader() {
    return (
      <div className={css.wrapper}>
        <DNA
         visible={true}
         height="80"
         width="80"
         ariaLabel="dna-loading"
         wrapperStyle={{}}
         wrapperClass={css.loader}
         glassColor="#c0efff"
         color="#0000ff"
        />
      </div>
    );
};