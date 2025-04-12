export const getDate = (date: Date) => {

	const dateToTransform = new Date(date);

	const months: { [key: number]: string } = {
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