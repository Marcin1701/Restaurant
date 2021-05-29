package pl.kurs;

import java.util.List;

public interface Komis {

	public abstract void create(Car car);

	public abstract Car find(int idc);

	public abstract List<Car> get();

	public abstract void update(Car car);

	public abstract void delete(int idc);

}