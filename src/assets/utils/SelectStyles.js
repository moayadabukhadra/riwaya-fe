const styles ={
    control: (base, state) => ({
        ...base,
        border: "none",
        boxShadow: "none",
        height: "50px",
        borderRadius: "15px",
    }),
    menu: (base, state) => ({
            ...base,
        }
    ),
    option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? "#f2f2f2" : "#fff",
            color: "#000",
            borderRadius: "15px",
            padding: "10px",
            fontSize: "14px",
            fontWeight: "500",
            cursor: "pointer",
            "&:hover": {
                backgroundColor: "#f2f2f2",
            }
        }
    ),
    placeholder: (base, state) => ({
        ...base,
        color: "#000",
        fontSize: "14px",
        fontWeight: "500",
    }),
    scrollbar: (base, state) => ({
        ...base,
        width: "10px",
        borderRadius: "15px",
    }),

}

export default styles