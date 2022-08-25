#include <iostream>
#include <fstream>

using namespace std;

string year = "2022";
string semester = "fall";
string id, name, grade, timeslot, temp;

int main()
{
	ifstream in;
	ofstream out;
	in.open("classes.csv");
	out.open("classes.txt");

	/*
	Download classes spreadsheet in csv format to use as input file.
	Include only: class id, class name, grade range, time & day (in order).
	Outputs raw text to be copied into html code file.
	*/

	while (getline(in, id, ','))
	{
		getline(in, name, ',');
		getline(in, grade, ',');
		getline(in, timeslot, '\n');
		// getline(in, temp, '\n');

		out << "<li id = \"" << id << "-" << semester << "-" << year << "\"><a href = \"classes/" << year << "/" << semester << "/main.html?id=" << id << "\">" << name << ", Grades " << grade << ", " << timeslot << "</a></li>" << endl;
	}

	return 0;
}