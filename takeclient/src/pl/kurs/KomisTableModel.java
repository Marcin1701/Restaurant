package pl.kurs;

import java.util.ArrayList;
import java.util.List;

import javax.swing.JOptionPane;
import javax.swing.table.AbstractTableModel;

public class KomisTableModel extends AbstractTableModel{
	private static final long serialVersionUID = 1L;

	/**
	 * CarDAO jest wstrzykiwane
	 */
	Komis carDAO;
	public void setCarDAO(Komis carDAO) {	this.carDAO = carDAO; }

	/**
	 * Lokalnie przechowywana lista obiektów.
	 * Co jakis czas synchronizowana z baz¹.
	 */
	List<Car> cars = new ArrayList<Car>();

	/**
	 * Inicjalizacja lokalnej listy obiektów
	 */
	public void init() {
		cars = carDAO.get();
	}

	
	@Override
	public int getColumnCount() {
		return 5;
	}

	@Override
	public int getRowCount() {
		return cars.size();
	}

	@Override
	public Object getValueAt(int rowIndex, int columnIndex) {
		switch(columnIndex) {
		case 0: return cars.get(rowIndex).getIdc();
		case 1: return cars.get(rowIndex).getMake();
		case 2: return cars.get(rowIndex).getModel();
		case 3: return cars.get(rowIndex).getRegNum();
		case 4: return cars.get(rowIndex).getPrice();
		}
		return null;
	}
	public String getColumnName(int columnIndex) {
		switch(columnIndex) {
		case 0: return "idc";
		case 1: return "marka";
		case 2: return "model";
		case 3: return "numer";
		case 4: return "cena";
		}
		return "";
	}
	
	@Override
	public boolean isCellEditable(int rowIndex, int columnIndex) {
		return true;
	}
	
	@Override
	public void setValueAt(Object o,int rowIndex, int columnIndex) {
		try{
		Car car = cars.get(rowIndex);
		String txt = (String)o;
		switch(columnIndex) {
		case 0: car.setIdc(Integer.parseInt(txt));break;
		case 1: car.setMake(txt);break;
		case 2: car.setModel(txt);break;
		case 3: car.setRegNum(txt);break;
		case 4: car.setPrice(Double.parseDouble(txt));break;
		}
		carDAO.update(car);
		}catch(Exception e) {
			// w przypadku b³êdu zmiana odrzucona i komunikat o b³êdzie 
			JOptionPane.showMessageDialog(null, "B³edna wartoœæ wpisana do pola!","B³¹d",JOptionPane.ERROR_MESSAGE);
		}
	}
	
	/**
	 * Dodanie samochodu do bazy
	 * @param car
	 */
	public void add(Car car) {
		carDAO.create(car);
		//odœwie¿ listê samochodów
		cars = carDAO.get();
		//powiadom tabelê JTable, ¿e trzeba odœwie¿yæ widok
		fireTableDataChanged();
	}
	
	/**
	 * Stworzenie samochodu i dodanie go do bazy
	 */
	public void addNew() {
		Car car = new Car();
		add(car);
	}
	/**
	 * Usuniêcie z bazy samochodu wyœwietlanego w tabeli na podanej pozycji 
	 * @param rowIndex
	 */
	public void del(int rowIndex) {
		Car car = cars.get(rowIndex);
		carDAO.delete(car.getIdc());
		//odœwie¿ listê samochodów
		cars = carDAO.get();
		//powiadom tabelê JTable, ¿e trzeba odœwie¿yæ widok
		fireTableDataChanged();
	}
}
