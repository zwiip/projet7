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