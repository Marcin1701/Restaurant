package pl.kurs;

public class Start {
public static void main(String[] args) {
	KomisWindow okno = new KomisWindow();
	KomisTableModel model = new KomisTableModel();
	Komis komis = new KomisRemote();
	
	model.setCarDAO(komis);
	okno.setTableModel(model);
	
	model.init();
	okno.init();

	okno.setVisible(true);
}
}
