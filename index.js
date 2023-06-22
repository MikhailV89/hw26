let marvelHeroes = [
	{
		name: "Thor"
	},
	{
		name: "Spider Man"
	}
];

let dcHeroes = [
	{
		name: "Superman"
	},
	{
		name: "Batman"
	},
	{
		name: "Deadpool"
	}
];

Array.prototype.heroesRender = function(folderName) {
    let importToHTML = `<table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Icon</th>
            </tr>
        </thead>
        <tbody>`;

    this.map(function(hero) {
        const imageName = hero.name.replace(' ', '');
        const imageIcon = `images/${folderName}/${imageName}.svg`;
        importToHTML += `
        <tr>
            <td>${hero.name}</td>
            <td>
            <img src="${imageIcon}">
            </td>
        </tr>`;
    });

    importToHTML += `
    </tbody>
    </table><br>`;

    document.write(importToHTML);
};

marvelHeroes.heroesRender("marvel");
dcHeroes.heroesRender("dc");