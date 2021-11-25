Alpine.data("inputData", () => ({
    inputList: [
        {
            title: "お名前",
            type: "text",
            value: "",
            message: "",
            validate() {
                // 1文字以上48文字以下
                if (this.value.length > 0 && this.value.length <= 4) {
                    this.message = "";
                } else {
                    this.message =
                        "お名前は1文字以上48文字以下で入力してください。";
                }
            },
        },
        {
            title: "所属",
            type: "text",
            value: "",
            message: "",
            validate() {},
        },
        {
            title: "メール",
            type: "email",
            value: "",
            message: "",
            validate() {},
        },
        {
            title: "件名",
            type: "text",
            value: "",
            message: "",
            validate() {},
        },
        {
            title: "本文",
            type: "textarea",
            value: "",
            message: "",
            validate() {},
        },
    ],
}));
