import './imagelink.css';

const ImageLink = ({onInputChange , onButtonSubmit}) => {
    return (<div>
        <p className="f3 black fw">
            {'This magic brain will detect faces in your pictures,Give it try.'}
        </p>
        <div className="center">
            <div className="center form pa4 br3 shadow-5">
                <input
                 className="f4 pa2 w-70 center" type="text" name="url" placeholder="Enter Url"
                 onChange={onInputChange}
                 />
                <button className="bg-light-purple grow w-30 white dib ph3 pv2 f4 link br3"
                onClick={onButtonSubmit}
                >Detect</button>
            </div>
        </div>
    </div>
    );
}

export default ImageLink;