package pl.kurs;

import java.awt.BorderLayout;
import java.awt.Dimension;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;


public class KomisWindow extends JFrame{
	private static final long serialVersionUID = 1L;
	/**
	 * Table model jest wstrzykiwany
	 */
	KomisTableModel tableModel;
	public void setTableModel(KomisTableModel tableModel) {
		this.tableModel = tableModel;
	}
	
	
	/**
	 * To musi by� wystawione, �eby mo�na by�o skorzysta� w akcji usu� 
	 */
	JTable tbl;

	/**
	 * Przygotowanie formatki
	 */
	public void init() {
		JPanel contentPane = (JPanel) this.getContentPane();
		// dodanie tabelki
		tbl = new JTable(tableModel);
		contentPane.add(new JScrollPane(tbl),BorderLayout.CENTER);
		// dodanie przycisk�w
		contentPane.add(getPrzyciski(),BorderLayout.SOUTH);

		this.pack();
		this.setLocationRelativeTo(null);
	}
	/**
	 * Generacja przycisk�w
	 * @return panel z przyciskami
	 */
	JPanel getPrzyciski() {
		JPanel pnPrzyciski = new JPanel();

		// Przycisk Dodaj
		JButton btnDodaj = new JButton("Dodaj");
		btnDodaj.setPreferredSize(new Dimension(80,24));
		// wy�lij do modelu polecenie stworzenia nowego (pustego) samochodu
		btnDodaj.addActionListener(new ActionListener() {
			@Override	
			public void actionPerformed(ActionEvent e) {
				tableModel.addNew();
				}
		});
		pnPrzyciski.add(btnDodaj);
		
		// Przycisk Usu�
		JButton btnUsun = new JButton("Usu�");
		btnUsun.setPreferredSize(new Dimension(80,24));
		// wy�lij do modelu polecenie usuni�cia zaznaczonego obiektu
		btnUsun.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				int index = tbl.getSelectedRow(); 
				if(index>=0) 
					tableModel.del(index);
			}
		});
		pnPrzyciski.add(btnUsun);

		return pnPrzyciski;
	}
	
}
