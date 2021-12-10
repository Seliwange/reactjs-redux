export default function Options({options}){
    return(
        options.map((option, key) => (
            <option key={key} value={option.name}>
                {option.name}
            </option>
        ))
    );
}