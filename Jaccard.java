package bixby_dataparser;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.PriorityQueue;
import java.util.Set;
class disease 
{
	String name;
	ArrayList<String> symptoms;
	ArrayList<String> parts;
	Set<String> symSet;
	Set<String> partSet;
	disease(){
		this.name="";
		this.symptoms=new ArrayList<String>();
		this.parts=new ArrayList<String>();
	}
	void makeSet()
	{
		this.partSet=new HashSet<String>(this.parts);
		this.symSet=new HashSet<String>(this.symptoms);
	}
	@Override
	public String toString() {
		return name + ", symSet=" + symSet + ", partSet=" + partSet;
	}
}
class similar implements Comparable<similar>
{
	String name1,name2;
	double pValue;
	double sValue;
	similar(String name1,String name2,double pValue, double sValue){
		this.name1=name1;
		this.name2=name2;
		this.pValue=pValue;
		this.sValue=sValue;
	}
	@Override
	public int compareTo(similar o) {
		// TODO Auto-generated method stub
		int comp1 =Double.compare(this.pValue, o.pValue);
		int comp2 =Double.compare(this.sValue, o.sValue);
		if(comp2==0)
		{
			return -comp1;
		}
		else
		{
			return -comp2;
		}
		
	}
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("similar [name1=");
		builder.append(name1);
		builder.append(", name2=");
		builder.append(name2);
		builder.append(", pValue=");
		builder.append(pValue);
		builder.append(", sValue=");
		builder.append(sValue);
		builder.append("]");
		return builder.toString();
	}
	
}
public class Jaccard {
	public static ArrayList<disease> diseases;
	public static void main(String[] args) throws Exception {
        // TODO Auto-generated method stub
        FileInputStream Input =  new FileInputStream("C:/Users/student/Downloads/data.txt");
        HashMap<String,Integer> hm = new HashMap<String,Integer>();
        BufferedReader br = new BufferedReader(new InputStreamReader(
                new FileInputStream ("C:/Users/student/Downloads/data.txt"),"euc-kr"));
        disease d = new disease();
        diseases = new ArrayList<disease>();
        int idx=0;
        while(true) {
            String line = br.readLine();
            if(line==null)
                break;
            //System.out.println((idx++)+" "+line);
            if(line.contains("name:"))
            {
            	d = new disease();
            	String name = line.split(": ")[1];
            	name=name.replace("'", "");
            	name=name.replace(",", "");
            //	System.out.println(name);
            	d.name=name;
            }
            else if(line.contains("symptom:")&&!line.contains("core_symptom:"))
            {
            	String wholeSymptoms = line.split(":")[1];
            	wholeSymptoms=wholeSymptoms.replaceAll(" ","");
            	wholeSymptoms=wholeSymptoms.replaceAll("'","");
            	String[] symptoms=wholeSymptoms.split(",");
            	d.symptoms=new ArrayList<String>(Arrays.asList(symptoms));
            
            }/*
            else if(line.contains("core_symptom:"))
            {
            	String wholeSymptoms = line.split(":")[1];
            	wholeSymptoms=wholeSymptoms.replaceAll(" ","");
            	wholeSymptoms=wholeSymptoms.replaceAll("'","");
            	//System.out.println(wholeSymptoms);
            	String[] symptoms=wholeSymptoms.split(",");
            	d.symptoms.addAll(Arrays.asList(symptoms));
            }*/
            else if(line.contains("part"))
            {
            	String wholeParts = line.split(":")[1];
            	wholeParts = wholeParts.replaceAll(" ", "");
            	wholeParts = wholeParts.replaceAll("'", "");
            	String[] parts = wholeParts.split(",");
            	d.parts=new ArrayList<String>(Arrays.asList(parts));
            	d.makeSet();
            	diseases.add(d);
            }
                
        }
        double[][] map=new double[diseases.size()][diseases.size()];
        similar[][] simmap = new similar[diseases.size()][diseases.size()];
        PriorityQueue<similar> simArray = new PriorityQueue<similar>();
        for(int i=0;i<diseases.size();i++)
        {
        	disease first= diseases.get(i);
        	System.out.println(first.toString());
        	for(int j=i+1;j<diseases.size();j++)
        	{
        		disease second= diseases.get(j);
        		int pSize = first.partSet.size();
        		int sSize = first.symSet.size()+second.symSet.size();
        		int pCommon=0;
        		int sCommon=0;
        		for (String part : second.partSet)
        		{
        			if(first.partSet.contains(part)) {
        		//		System.out.println(first.name+" "+second.name+" "+part);
        				pCommon++;
        			}
        			else
        			{
        				pSize++;
        			}
        		}
        		for(String sympt : second.symSet)
        		{
        			if(first.symSet.contains(sympt)) {
        				sCommon++;
        			}
        			else
        			{
        				sSize++;
        			}
        		}
        		double pSimRating =0;
    			double sSimRating =0;
    			
        		if(pSize!=0) {
        			pSimRating = (double)pCommon/pSize;
        		}
        		else
        		{
        			pSimRating =0;
        		}
        		if(sSize!=0) {
        			sSimRating = (double)sCommon/sSize;
        		}
        		else
        		{
        			sSimRating=0;
        		}
        		if(pSimRating==0)
        			continue;
        		if(sSimRating==0)
        			continue;
        		simArray.add(new similar(first.name,second.name,pSimRating,sSimRating));
        	}
        }
        while(!simArray.isEmpty())
        {
        	similar cur = simArray.poll();
        	System.out.printf("%s\t%s\n%.5f\t%.5f\n",cur.name1,cur.name2,cur.pValue,cur.sValue);
        }
        
	}
      
}