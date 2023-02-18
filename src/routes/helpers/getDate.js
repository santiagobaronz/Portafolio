export const getDate = (date) => {
	/* Creating a new date object and assigning it to the variable date. Then it is selecting the
	element with the class navbar-date and assigning it to the variable navbarDate. Then it is
	creating two objects, abbreviatedDays and months. */

	let dateToTransform = new Date(date);

	const abbreviatedDays = {
		0: "Domingo", 1: "Lunes", 2: "Martes", 3: "Miércoles",
		4: "Jueves", 5: "Viernes", 6: "Sábado"
	}

	const months = {
		0: "Enero", 1: "Febrero", 2: "Marzo", 3: "Abril",
		4: "Mayo", 5: "Junio", 6: "Julio", 7: "Agosto",
		8: "Septiembre", 9: "Octubre", 10: "Noviembre", 11: "Diciembre"
	}

	/* Getting the day, month, date, year and then putting it all together in a string. */
	const monthOnDate = months[dateToTransform.getMonth()];
	const numberOnDate = dateToTransform.getDate();
	const yearOnDate = dateToTransform.getFullYear();
	const finalDate = `${monthOnDate} ${numberOnDate} de ${yearOnDate}`;

	return finalDate;
}