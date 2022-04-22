import React from "react";

const EditUserPage = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <form onSubmit={handleSubmit}>
                        <h3 className="mb-4">Edit</h3>
                        <TextField
                            label="Email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                        />
                        <SelectField
                            label="Выберите вашу профессию"
                            value={data.profession}
                            onChange={handleChange}
                            options={professions}
                            defaultOption="Choose...."
                            name="profession"
                        />

                        <RadioField
                            options={[
                                { name: "Male", value: "male" },
                                { name: "Female", value: "female" },
                                { name: "Other", value: "other" }
                            ]}
                            value={data.sex}
                            onChange={handleChange}
                            name="sex"
                            label="Выберите ваш пол"
                        />

                        <MultiSelectField
                            options={qualities}
                            onChange={handleChange}
                            name="qualities"
                            label="Выберите ваши качества"
                            defaultValue={data.qualities}
                        />

                        <button
                            type="submit"
                            disabled={!noErrors}
                            className="btn btn-primary w-100 mx-auto"
                        >
                            Обновить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditUserPage;
