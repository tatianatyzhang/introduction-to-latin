import './Contents.css';

function Contents() {
    
    // Displays the buttons for clicking
    function AppButtons() {
        return (
        <div>
            <a href="https://docs.google.com/document/d/1vWLWXvUuzVejFKikmlnaqtmTjk3pHRfU/edit?usp=sharing&ouid=105350713835899786010&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer"><button className="Contents-buttons">The Origin of Latin</button></a>
            <a href="https://docs.google.com/document/d/1FmAcSrNPYnSUtvEwB2H4TIMhx5rlPP7f/edit?usp=sharing&ouid=105350713835899786010&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer"><button className="Contents-buttons">Essential Terminology for Latin Verbs</button></a>
            <a href="https://docs.google.com/document/d/1HtcXhc4-Ic_dP-yPd9fDv91uQIUdmZpB/edit?usp=sharing&ouid=105350713835899786010&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer"><button className="Contents-buttons">The Verb To Be, the Infinitive, and the Imperative</button></a>
            <a href="https://docs.google.com/document/d/1luYXqjWE-MDumjDG0pNjeNBeA_ctIirC/edit?usp=sharing&ouid=105350713835899786010&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer"><button className="Contents-buttons">The Present, Future, and Imperfect Tenses</button></a>
            <a href="https://docs.google.com/document/d/1PtLkuKV6PENL-Te4JkGjDryQIkV3IUef/edit?usp=sharing&ouid=105350713835899786010&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer"><button className="Contents-buttons">The Perfect, Pluperfect, and Future Perfect Tenses</button></a>
            <a href="https://docs.google.com/document/d/13lLBKVYEcWV53GuCfmbHCIYqVehWN46U/edit?usp=sharing&ouid=105350713835899786010&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer"><button className="Contents-buttons">Vocabulary (A-Z Latin)</button></a>
            <a href="https://docs.google.com/document/d/12aHhzFOjzEp9kEu4QnCgWOdj_I_cf4Hf/edit?usp=sharing&ouid=105350713835899786010&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer"><button className="Contents-buttons">Vocabulary (A-Z English)</button></a>
            <a href="https://docs.google.com/document/d/1eMOuIFMpiJOqOqKNxyj3Vvsr-d5bZb33/edit?usp=sharing&ouid=105350713835899786010&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer"><button className="Contents-buttons">Answer Key</button></a>
        </div>
        );
    }


    return (
        <div>
            <AppButtons />
        </div>
    );
}

export default Contents;