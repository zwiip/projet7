/**
 * un composant react  pour afficher des "mots clés" décrivant le logement sous forme de tag
 * @param {Array} props.tags - propriétés du composant : tableau des tags à afficher
 * @returns utilise la méthode map pour parcourir la liste et afficher un tag pour chaque élément.
 */
function Tag({ tags }) {
    return (
        <div className="tags">
            {tags.map((tag, index) => (
                <span className="tag" key={index} >{tag}</span>
            )
            )}
        </div>
    )
}

export default Tag;